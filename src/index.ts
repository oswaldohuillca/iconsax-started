import { readdir, readFileSync, writeFileSync } from 'fs'


const changeFilename = (name: string) => {
  let tmp: string | string[] = name.replace('.svg', '')
  tmp = tmp.replace(/\&/, '-')
  tmp = tmp.split('-')
  tmp = tmp.map(text => {
    return text[0].toUpperCase() + text.substring(1)
  })
  tmp = tmp.join('')
  return tmp
}


const editSVG = (svg: string) => {
  let change = svg.replace(/stroke="#292D32"/g, 'stroke={color}')
  change = change.replace(/fill="#292D32"/g, 'fill={color}')
  change = change.replace(/width="24"/, 'width={width}')
  change = change.replace(/height="24"/, 'height={height}')
  // change = change.replace(/<\w.+svg+">/, '')
  // change = change.replace(/<\/svg>/, '')
  return change
}


const templateSvelte = (svg: string) => {
  return `
  <script lang='ts'>
    export const width: number = 24;
    export const height: number = 24;
    export let color: string = "#292D32";
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
    // const fileNames = []
    files.map(file => {
      const fileName = changeFilename(file)
      // fileNames.push(`export { default as X${fileName} } from './${fileName}.svelte'`)
      const fileSVG = readFileSync(`./iconsax/broken/${file}`, { encoding: 'utf8', flag: 'rs' })
      writeFileSync(`./iconsax-svelte/broken/${fileName}.svelte`, templateSvelte(fileSVG), {
        flag: 'w+'
      })
    })
    // writeFileSync(`./iconsax-svelte/broken/index.ts`, fileNames.join('\n'), {
    //   flag: 'w+'
    // })
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


console.log('Finish...')