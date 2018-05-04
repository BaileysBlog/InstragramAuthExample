import { Injectable, ElementRef, ViewChild, HostListener } from "@angular/core";
import { MatSidenav, MatIconRegistry } from "@angular/material";
import { Router, NavigationEnd } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

import 'rxjs/add/operator/filter';


@Injectable()
export class UIService
{
    public ShowSideNav: boolean;
    NavBarHeight: number;
    BodyHeight: number;
    public FullHeight: number = 0;
    public CurrentRoute: string;
    public PreviousRoute: string;

    IncludeSideNav: boolean = true;

    constructor(private Nav: Router, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer)
    {
        Nav.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) =>
            {
                this.PreviousRoute = this.CurrentRoute;
                this.CurrentRoute = e.url;

                this.ShowSideNav = false;
                window.dispatchEvent(new Event("resize"));
            });

        this.ConfigureIcons();
    }

    private ConfigureIcons(): void
    {
        this.iconRegistry.addSvgIcon(
            'instagram',
            this.sanitizer.bypassSecurityTrustResourceUrl('../assets/instagram_icon.svg'));
    }

    public GetIncludeSideNav(): boolean
    { 
        return this.IncludeSideNav;
    }

    public SetIncludeSideNav(state: boolean): void
    { 
        this.IncludeSideNav = state;
    }

    public SetNavBarHeight(value: number): void
    { 
        this.NavBarHeight = value;
    }

    public GetNavBarHeight(): number
    { 
        return this.NavBarHeight;
    }

    public CalculateFullHeight(): void
    { 
        //console.log(`Body Height: ${this.BodyHeight} Nav Height: ${this.GetNavBarHeight()}`);
        this.FullHeight = this.BodyHeight - this.GetNavBarHeight();
        
    }

    public SetBodyHeight(value: number): void
    {
        this.BodyHeight = value;
    }

    

    ToggleSideNav(): void
    { 
        this.ShowSideNav = !this.ShowSideNav;
    }
}