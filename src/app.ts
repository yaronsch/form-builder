import {bootstrap} from 'angular2/platform/browser';
import {FormBuilderApp} from './app/form-builder';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';
import {FormService} from "./app/form-service";

bootstrap(FormBuilderApp, [FormService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
