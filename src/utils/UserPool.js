import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-2_j0199jcL6",
    ClientId: "380nhob8fer5atv7fjmt0obs70"
}

export default new CognitoUserPool(poolData)