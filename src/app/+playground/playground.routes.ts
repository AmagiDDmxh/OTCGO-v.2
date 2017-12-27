import { PlaygroundComponent } from "./playground.component";

export const routes = [
  {
    path: '', children: [
    { path: '', component: PlaygroundComponent }
  ]
  },
];
