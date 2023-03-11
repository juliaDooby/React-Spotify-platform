import { Module } from "@nestjs/common";
import * as path from "path";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),})
    MongooseModule.forRoot('mongodb+srv://music-platform:admin:admin@cluster0.d9fgk2g.mongodb.net/?retryWrites=true&w=majority')
    TrackModule,
    FileModule
  ],
})
export class AppModule {}
