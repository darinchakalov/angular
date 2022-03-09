import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [ThemesComponent, NewThemeComponent, AsideComponent],
  imports: [CommonModule, ThemeRoutingModule],
})
export class ThemesModule {}
