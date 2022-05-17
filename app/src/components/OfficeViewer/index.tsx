import React, { useState, useCallback, useEffect} from "react"
import Viewer from "./Viewer"
import {
  compose,
  isEmpty,
  map,
  reject,
  evolve,
} from "ramda"
import { POIs, Desks, Path } from "./data"

const INITIAL_MODE = "3d"

const OfficeViewer = () => {
  const [space, setSpace] = useState()
  const [mode, setMode] = useState(INITIAL_MODE)
  const [path, setPath] = useState<any>([])

  // memoize so Viewer render once only (wrapped in memo)
  const onReady = useCallback((space: any) => setSpace(space), [])
  const onModeChange = useCallback(setMode, [setMode])

  const noElevationIn2D = useCallback((value: any) => (mode === "3d" ? value : 0), [
    mode,
  ])

  const handleOnPOIsClick = (d: any) => {
    const selectedPath = Path[d.name]
    setPath([selectedPath])
  }

  // render POIs
  useEffect(() => {
    if (!space) {
      return
    }
    // @ts-ignore
    space.addDataLayer({
      id:      "rooms",
      type:    "polygon",
      data:    POIs,
      tooltip: (d: any) => `${d.name} - ${d.available ? "free" : "occupied"}`,
      color:   (d: any) => (d.available ? "#3aa655" : "#ff3f34"),
      onClick: handleOnPOIsClick,
      alpha:   0.7,
      height:  2.9,
    })
    // @ts-ignore
    space.addDataLayer({
      id:      "desks",
      type:    "furniture",
      data:    Desks,
      tooltip: (d: any) => `${d.name} - ${d.available ? "free" : "occupied"}`,
      color:   (d: any) => (d.available ? "#3aa655" : "#ff3f34"),
      onClick: handleOnPOIsClick,
    })
    return () => {
      // @ts-ignore
      space.removeDataLayer("rooms")
      // @ts-ignore
      space.removeDataLayer("desks")
    }
  }, [space])

  useEffect(() => {
    if (!space) {
      return
    }
    // @ts-ignore
    space.addDataLayer({
      id:      "polylines",
      type:    "polyline",
      data:    compose(
        map(
          evolve({ coordinates: map(evolve({ elevation: noElevationIn2D })) }),
        ),
        reject((p: any) => isEmpty(p.coordinates)),
      )(path),
      scale:   0.2,
      tooltip: (d: any) => d.name,
    })
  }, [space, path, noElevationIn2D])

  return (
    <div className="office-viewer" style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
      <Viewer mode={INITIAL_MODE}
              onReady={onReady}
              onModeChange={onModeChange}/>
    </div>
  )
}

export default OfficeViewer
