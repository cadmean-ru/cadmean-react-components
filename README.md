# cadmean-react-components

> A library of some useful React components

[![NPM](https://img.shields.io/npm/v/cadmean-react-components.svg)](https://www.npmjs.com/package/cadmean-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save cadmean-react-components
```

## Usage

### Bootstrap based delte dialog
```tsx
import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

import { DeleteDialog } from 'cadmean-react-components';

const App = () => {
  let [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return <div>
    <Button onClick={() => setShowDeleteDialog(true)}>
      Show delete dialog
    </Button>

    <DeleteDialog 
      show={showDeleteDialog}
      onHide={() => setShowDeleteDialog(false)}
      onDelete={() => alert('deleted')}
      title="Delete something?"
      message="Are u sure?"
    />
  </div>
}
```

## License

MIT © [cadmean-ru](https://github.com/cadmean-ru)
