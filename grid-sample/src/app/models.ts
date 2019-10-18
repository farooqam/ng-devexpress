export class Hero {
  id: number;
  name: string;
  aliases: Alias[];
}

export class Alias {
  name: string;
  lastUsed: string;
}
