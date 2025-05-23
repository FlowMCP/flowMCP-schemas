import { Files } from './src/task/Files.mjs'
import { Print } from './src/task/Print.mjs'
import fs from 'fs'


const files = await Files.getAllFiles( { dir: './schemas/v1.2.0/' } )
const preparedParams = await Files.getSchemaDetails( { files } )

const { table } = Print.getTable( { preparedParams } )
const { commandStr } = Print.getCommand( { preparedParams } )


const readme = fs.readFileSync( './.github/workflows/generate-readme/src/templates/README.md', 'utf8' )
    .replace( '{{INSERT_TABLE}}', table )
    .replace( '{{INSERT_COMMAND_STRING}}', commandStr )
    
fs.writeFileSync( 
    './README.md',
    readme,
    'utf8'
)