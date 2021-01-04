import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ProductModule } from "../product/product.module";
import { TagModule } from "../tag/tag.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OverviewItemComponent } from '../shared/overview-item/overview-item.component';
import { BrandModule } from "../brand/brand.module";
import { CategoryModule } from "../category/category.module";
import { DashboardBrandsComponent } from './dashboard-brands/dashboard-brands.component';

@NgModule({
	declarations: [DashboardComponent, OverviewItemComponent, DashboardBrandsComponent],
	imports: [
		CommonModule,
		RouterModule,
		DashboardRoutingModule,
		ProductModule,
		SharedModule,
		TagModule,
		FontAwesomeModule,
		BrandModule,
		ProductModule,
		CategoryModule
	],
})
export class DashboardModule {}
