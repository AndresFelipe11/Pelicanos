import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerCreatorComponent } from './player-creator/player-creator.component';
import { PlayerEditorComponent } from './player-editor/player-editor.component';
import { from } from 'rxjs';
import { PlayerViewComponent } from './player-view/player-view.component';

@NgModule({
  declarations: [PlayerListComponent, PlayerCreatorComponent, PlayerEditorComponent, PlayerViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PlayerCreatorComponent,
    PlayerEditorComponent,
    PlayerListComponent
  ]
})
export class PlayerModule { }
