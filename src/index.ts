import { readdir, readFileSync, writeFileSync } from 'fs'

const changeFilename = (name: string) => name.replace('.svg', '')

const editSVG = (svg: string) => {
  let change = svg.replace(/stroke="#292D32"/g, 'stroke={color}')
  change = change.replace(/fill="#292D32"/g, 'fill={color}')
  change = change.replace(/<\w.+svg+">/, '')
  change = change.replace(/<\/svg>/, '')
  return change
}

// export let width:number = 24
// export let height:number = 24

const templateSvelte = (svg: string) => {
  return `
  <script lang='ts'>
    export let color:string = '#292D32'
  </script>
  ${editSVG(svg)}
  `
}

readdir('./iconsax/bold', { withFileTypes: false }, async (error, files) => {
  if (error) {
    console.error(error)
  } else {
    files.map(file => {
      const fileSVG = readFileSync(`./iconsax/bold/${file}`, { encoding: 'utf8', flag: 'rs' })
      writeFileSync(`./iconsax-svelte/bold/${changeFilename(file)}.svelte`, templateSvelte(fileSVG), {
        flag: 'w+'
      })
    })

  }
})


readdir('./iconsax/broken', { withFileTypes: false }, async (error, files) => {
  if (error) {
    console.error(error)
  } else {
    files.map(file => {
      const fileSVG = readFileSync(`./iconsax/broken/${file}`, { encoding: 'utf8', flag: 'rs' })
      writeFileSync(`./iconsax-svelte/broken/${changeFilename(file)}.svelte`, templateSvelte(fileSVG), {
        flag: 'w+'
      })
    })

  }
})

readdir('./iconsax/bulk', { withFileTypes: false }, async (error, files) => {
  if (error) {
    console.error(error)
  } else {
    files.map(file => {
      const fileSVG = readFileSync(`./iconsax/bulk/${file}`, { encoding: 'utf8', flag: 'rs' })
      writeFileSync(`./iconsax-svelte/bulk/${changeFilename(file)}.svelte`, templateSvelte(fileSVG), {
        flag: 'w+'
      })
    })

  }
})

readdir('./iconsax/linear', { withFileTypes: false }, async (error, files) => {
  if (error) {
    console.error(error)
  } else {
    files.map(file => {
      const fileSVG = readFileSync(`./iconsax/linear/${file}`, { encoding: 'utf8', flag: 'rs' })
      writeFileSync(`./iconsax-svelte/linear/${changeFilename(file)}.svelte`, templateSvelte(fileSVG), {
        flag: 'w+'
      })
    })
  }
})

readdir('./iconsax/outline', { withFileTypes: false }, async (error, files) => {
  if (error) {
    console.error(error)
  } else {
    files.map(file => {
      const fileSVG = readFileSync(`./iconsax/outline/${file}`, { encoding: 'utf8', flag: 'rs' })
      writeFileSync(`./iconsax-svelte/outline/${changeFilename(file)}.svelte`, templateSvelte(fileSVG), {
        flag: 'w+'
      })
    })
  }
})

readdir('./iconsax/twotone', { withFileTypes: false }, async (error, files) => {
  if (error) {
    console.error(error)
  } else {
    files.map(file => {
      const fileSVG = readFileSync(`./iconsax/twotone/${file}`, { encoding: 'utf8', flag: 'rs' })
      writeFileSync(`./iconsax-svelte/twotone/${changeFilename(file)}.svelte`, templateSvelte(fileSVG), {
        flag: 'w+'
      })
    })

  }
})