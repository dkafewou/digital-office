import React, { memo } from 'react'
import useSmplr from '../../hooks/useSmplr'

interface ViewerParams {
  mode: string
  onReady: Function
  onModeChange: Function
}

const Viewer: React.FC<ViewerParams> = memo(({ mode, onReady, onModeChange }) => {
  const onLoad = () => {
    // @ts-ignore
    const space = new smplr.Space({
      spaceId: 'ed0f9af8-e3f5-453d-914c-fec750e3c81b',
      spaceToken: 'X',
      containerId: 'smplr-container'
    })
    space.startViewer({
      preview: true,
      mode,
      allowModeChange: true,
      onModeChange,
      onReady: () => onReady(space),
      onError: (error: any) => console.error('Could not start viewer', error)
    })
  }

  useSmplr({ onLoad })

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '60%'
      }}
    >
      <div
        id='smplr-container'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'whitesmoke'
        }}
      />
    </div>
  )
})

export default Viewer
