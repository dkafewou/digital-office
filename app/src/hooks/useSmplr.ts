import { useEffect, useRef } from "react"
import useScript from "./useScript"
import useStylesheet from "./useStylesheet"

const useSmplr = ({ onLoad, dev = false }: UseSmplrParams) => {
  const loaded = useRef(false)

  const smplrStatus = useScript(
    `https://${dev ? "dev" : "app"}.smplrspace.com/lib/smplr.js`,
  )
  useStylesheet(`https://${dev ? "dev" : "app"}.smplrspace.com/lib/smplr.css`)

  useEffect(() => {
    if (smplrStatus === "ready" && !loaded.current) {
      loaded.current = true
      onLoad && onLoad()
    }
  }, [onLoad, smplrStatus])
}

interface UseSmplrParams {
  onLoad: Function
  dev?: boolean
}

export default useSmplr
