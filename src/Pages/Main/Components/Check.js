import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { useState } from "react";
function Check() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button color="primary" onClick={() => setOpen(!open)}>
        Open
      </Button>
      <Offcanvas
        backdrop={false}
        fade={false}
        toggle={() => setOpen(!open)}
        isOpen={open}
      >
        <OffcanvasHeader toggle={() => setOpen(!open)}>
          Offcanvas
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Check;
