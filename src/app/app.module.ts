import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroPage } from './contato/cadastro/cadastro.page';
import { ListarPage } from './contato/listar/listar.page';
import { PesquisaPage } from './contato/pesquisa/pesquisa.page';
import { TelevisaoPage } from './contato/eletronicos/televisao/televisao.page';
import { CelularPage } from './contato/eletronicos/celular/celular.page';
import { NotebookPage } from './contato/eletronicos/notebook/notebook.page';
import { RadioPage } from './contato/eletronicos/radio/radio.page';
import { PendrivePage } from './contato/eletronicos/pendrive/pendrive.page';
import { OutroseletronicosPage } from './contato/eletronicos/outroseletronicos/outroseletronicos.page';
@NgModule({
  declarations: [AppComponent, CadastroPage, ListarPage, PesquisaPage, TelevisaoPage, CelularPage, NotebookPage,
  RadioPage, PendrivePage, OutroseletronicosPage ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyDIoo8wd4iX91Yx2RsTEixtRCNYI9BwPqg",
      authDomain: "cidade-estado.firebaseapp.com",
      databaseURL: "https://cidade-estado.firebaseio.com",
      projectId: "cidade-estado",
      storageBucket: "cidade-estado.appspot.com",
      messagingSenderId: "774857646386",
      appId: "1:774857646386:web:a2edd0b3b2919ed0"
    }), AngularFireDatabaseModule
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
