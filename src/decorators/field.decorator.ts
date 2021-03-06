import { ResolverFieldsMetadata } from '../constants/metadata.constants';
import { IFieldOptions } from '../interfaces';
import { manageResolverMetadata } from './utils/resolver-decorators.utils';

export function Field(options: IFieldOptions): MethodDecorator {
  return (target, propertyKey) => {
    manageResolverMetadata({ target, propertyKey, reflectionHelper: ResolverFieldsMetadata, options });
  };
}
