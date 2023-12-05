import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {PolymorpheusContent, PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';
import {ContextWithActive} from '../interfaces';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.template.html',
    styleUrls: ['./tabs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, PolymorpheusOutletDirective]
})
export class TabsComponent<T> {
    @Input()
    tabs: ReadonlyArray<T> = [];

    @Input()
    content: PolymorpheusContent<ContextWithActive<T>> = ({
        $implicit,
    }: ContextWithActive<T>) => String($implicit);

    @Input()
    activeTab: T | null = null;

    @Output()
    activeTabChange = new EventEmitter<T>();

    isActive(tab: T): boolean {
        return tab === this.activeTab;
    }

    getContext($implicit: T): ContextWithActive<T> {
        return {
            $implicit,
            active: this.isActive($implicit),
        };
    }

    onClick(tab: T) {
        this.activeTab = tab;
        this.activeTabChange.emit(tab);
    }
}
