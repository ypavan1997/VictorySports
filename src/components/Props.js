import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
//import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
//import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
//import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
//registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


export default class Props extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Set initial files
            files: []
        };
    }

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    render() {
        return <Form>
            <Form.Field>
                <label>Properties</label>
                <TextArea autoHeight placeholder='Max 500 characters' style={{ minHeight: 100 }} name={'description'} value={this.props.value.description} onChange={this.props.onPropsChange}/>
            </Form.Field>
            <Form.Field>
                <FilePond ref={ref => this.pond = ref}
                          allowMultiple={true}
                          maxFiles={2}
                          //server="/api"
                          oninit={() => this.handleInit() }
                          onupdatefiles={this.props.onPropsImgChange}>

                    {/* Update current files  */}
                    {this.state.files.map(file => (
                        <File key={file} src={file} origin="local" />
                    ))}

                </FilePond>
            </Form.Field>
        </Form>
    }
}
