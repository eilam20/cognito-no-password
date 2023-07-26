import * as cdk from '@aws-cdk/core';
import { PhoneOnlyPasswordLessStack } from '../lib/phone-only-password-less-stack';

const app = new cdk.App();
new PhoneOnlyPasswordLessStack(app, 'PhoneOnlyPasswordLessStack', {
	env: { region: 'eu-west-1', account: '118968448524' },
});
