import { Device } from '@capacitor/device';
import { SafeArea } from 'capacitor-plugin-safe-area';

import React, { useEffect, useState } from 'react';

function App() {
  const [device, setDevice] = useState(null);
  const [safeAreaInsets, setSafeAreaInsets] = useState(null);

  useEffect(() => {
    Device.getInfo().then((device) => {
      setDevice(device);
    });

    SafeArea.getSafeAreaInsets().then(({ insets }) => {
      setSafeAreaInsets(insets);
    });
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        paddingTop: device?.platform === 'ios' ? safeAreaInsets?.top : 0,
        paddingBottom: device?.platform === 'ios' ? safeAreaInsets?.bottom : 0,
      }}
    >
      <iframe
        src="https://app.suntenglobal.com"
        style={{ flex: 1, border: 'none' }}
      />
    </div>
  );
}

export default App;
