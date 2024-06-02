# EpicGames

EpicGames is a minimalist scraper that returns the free games of the week

## Install

Install EpicGames with npm

```bash
  npm install @allan.pereira.dev/epicgames
```

## Usage/Examples

```javascript
import { EpicGames } from '@allan.pereira.dev/epicgames';
const epicGames = new EpicGames();
epicGames
  .FreeGames({ language: 'pt-BR', countryCode: 'BR' })
  .then((res) => console.log(res));
```

## Output

```
[
  ResultMapper {
    data: {
      title: 'example',
      description: '...',
      id: '...',
      isCodeRedemptionOnly: true,
      namespace: '...',
      keyImages: [],
      price: [],
      offerMappings: [],
      productSlug: 'example'
    }
  }
]
```

## License

[MIT](https://github.com/CodeByAllan/EpicGames-lib/blob/master/LICENSE.md)

## Autores

- [@codebyallan](https://github.com/CodeByAllan)
