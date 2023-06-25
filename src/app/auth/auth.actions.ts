import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export class LoginActionPayload {
    constructor(public user: User) {}
}

const login = createAction(
    "[Login Page] User Login",
    props<LoginActionPayload>()
);

const logout = createAction(
    "[Top Menu] Logout"
);


export const AuthActions = {login, logout};