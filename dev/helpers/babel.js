import {parse} from '@babel/parser';
import generate from '@babel/generator';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import fsA from './fsAsync';

const visitor = {
    ImportDeclaration(path) {
        const {specifiers, source} = path.node;
        const importPath = source.value.replace(/\.mjs$/, '') + '.js';
        path.replaceWithMultiple(specifiers.map(({type, local}) => {
            switch(type) {
            case 'ImportNamespaceSpecifier':
            case 'ImportDefaultSpecifier':
                return t.VariableDeclaration('const', [
                    t.VariableDeclarator(local, t.CallExpression(t.Identifier('require'), [
                        t.StringLiteral(importPath)
                    ]))
                ]);
            case 'ImportSpecifier':
                return t.VariableDeclaration('const', [
                    t.VariableDeclarator(local, t.MemberExpression(
                        t.CallExpression(t.Identifier('require'), [
                            t.StringLiteral(importPath)
                        ]),
                        local
                    ))
                ]);
            }
        }));
    },
    ExportDefaultDeclaration(path) {
        const {declaration} = path.node;
        const moduleExports = t.MemberExpression(t.Identifier('module'), t.Identifier('exports'));
        path.replaceWithMultiple([
            t.ExpressionStatement(t.AssignmentExpression('=', moduleExports, declaration)),
            t.ExpressionStatement(t.AssignmentExpression('=', t.MemberExpression(
                moduleExports,
                t.Identifier('default')
            ), moduleExports))
        ]);
    },
    ExportNamedDeclaration(path) {
        const {specifiers} = path.node;
        path.replaceWithMultiple(specifiers.map(({exported, local}) => {
            return t.ExpressionStatement(t.AssignmentExpression('=', t.MemberExpression(
                t.Identifier('exports'),
                exported
            ), local));
        }));
    }
};

async function babelize(file) {
    const source = await fsA.readFile(file, 'utf-8');
    const ast = parse(source, {
        sourceType: 'module'
    });
    traverse.default(ast, visitor);
    ast.program.body.unshift(t.ExpressionStatement(t.StringLiteral('use strict')));
    const {code} = generate.default(ast);
    return code;
}

export default babelize;
