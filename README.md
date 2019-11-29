# Polymorpheus

[![npm version](https://img.shields.io/npm/v/@tinkoff/ng-polymorpheus.svg)](https://npmjs.com/package/@tinkoff/ng-polymorpheus)
[![Build Status](https://travis-ci.org/TinkoffCreditSystems/ng-polymorpheus.svg?branch=master)](https://travis-ci.org/TinkoffCreditSystems/ng-polymorpheus)
[![Coverage Status](https://coveralls.io/repos/github/TinkoffCreditSystems/ng-polymorpheus/badge.svg?branch=master)](https://coveralls.io/github/TinkoffCreditSystems/ng-polymorpheus?branch=master)
[![angular-open-source-starter](https://img.shields.io/badge/made%20with-angular--open--source--starter-d81676?logo=angular)](https://github.com/TinkoffCreditSystems/angular-open-source-starter)

> **Polymorpheus** is a tiny library for polymorphic templates in Angular.
>
> It is 1 KB gzip, dependency free and allows you to make pretty cool things.

![Polymorpheus](projects/demo/assets/logo.svg)

## What does it do?

It abstracts over different ways of view customization in Angular with one simple component:

```html
<polymorpheus-outlet [content]="content" [context]="context"></polymorpheus-outlet>
```

**Content** accepts:

-   primitives like `number` or `string`
-   functions that take `context` as argument and return a primitive
-   templates that get instantiated with given `context`
-   components that would get `context` injected through DI

**Context** is optional when you need your **content** to adapt to the situation

## How to use it?

Typical use case would be a component that accepts visual customization and defines
context by itself. Say a menu list where you can configure how each item should look
like by passing a template. And context would be item itself and, for example,
whether it is focused or not.

Please see [extensive demo](https://codesandbox.io/s/github/TinkoffCreditSystems/ng-polymorpheus/tree/master/projects/demo).

You can also [read about this concept in detail](https://medium.com/angular-in-depth/agnostic-components-in-angular-2427923b742d).

## Open-source

Do you also want to open-source something, but hate the collateral work?
Check out this [Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter)
we’ve created for our projects. It got you covered on continuous integration,
pre-commit checks, linting, versioning + changelog, code coverage and all that jazz.
