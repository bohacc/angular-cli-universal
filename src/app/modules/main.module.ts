import {NgModule} from "@angular/core";
import {Home} from "../components/home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {SectionSW} from "../components/section-sw/section-sw.component";
import {SectionObject} from "../components/section-object/section-object.component";
import {MyFilterArray} from "../pipes/my-filter-array.pipe";
import {HtmlOutlet4} from "../components/html-outlet4/html-outlet4.component";

@NgModule({
  declarations: [
    Home,
    SectionSW,
    SectionObject,
    MyFilterArray,
    HtmlOutlet4
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    Home,
    SectionSW,
    SectionObject,
    MyFilterArray,
    HtmlOutlet4
  ]
})
export class MainModule {}
