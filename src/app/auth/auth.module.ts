import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
	declarations: [LoginComponent],
	imports: [RouterModule, AuthRoutingModule, CommonModule, SharedModule],
	exports: [LoginComponent],
})
export class AuthModule {}
