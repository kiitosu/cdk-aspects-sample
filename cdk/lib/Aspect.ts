import { IAspect, CfnResource } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';

// Aspect定義
export class RemoveSkipDestinationValidationAspect implements IAspect {
  visit(node: IConstruct): void {
    if (
      node instanceof CfnResource &&
      node.cfnResourceType === 'Custom::S3BucketNotifications'
    ) {
      node.addPropertyDeletionOverride('SkipDestinationValidation');
    }
  }
}