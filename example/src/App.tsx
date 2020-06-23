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

export default App
