import 'reflect-metadata';

import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import { ResolverFieldsMetadata } from '../constants/metadata.constants';
import { IResolverFieldMetadata } from '../interfaces';
import { Args } from './args.decorator';
import { Field } from './field.decorator';

const test = suite('@Field');

test('should load @Field metadata', async () => {
  class UserClass {}

  const metadata: IResolverFieldMetadata[] = [
    { method: 'methodOne', options: { type: 'User' } },
    { method: 'methodTwo', options: { type: 'Location', name: 'location' } },
    { method: 'methodThree', options: { type: UserClass } },
  ];

  class ResolverTest {
    @Field({ type: 'User' })
    methodOne(): void {
      // noop.
    }

    @Field({ type: 'Location', name: 'location' })
    methodTwo(): void {
      // noop.
    }

    @Field({ type: UserClass })
    methodThree(): void {
      // noop.
    }
  }

  assert.equal(ResolverFieldsMetadata.get(ResolverTest), metadata);
});

test.run();
