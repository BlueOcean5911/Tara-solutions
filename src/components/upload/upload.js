import { CloudUploadOutlined } from '@ant-design/icons';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { FormattedMessage } from 'react-intl';
import UploadService from 'service/upload-files.service';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #888',
  boxShadow: 24,
  p: 4
};

const UploadFiles = ({ setData }) => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [messageId, setMessageId] = useState('');

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        console.log(JSON.parse(response.data.result));
        setData(JSON.parse(response.data.result));
      })
      .catch((e) => {
        console.log(e);
        setProgress(0);
        // Todo: show the modal
        setMessageId('warningMessage1');
        handleOpen();
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  const onDrop = (files) => {
    if (files.length > 0) {
      setSelectedFiles(files);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {currentFile && (
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + '%' }}
          >
            {progress}%
          </div>
        </div>
      )}

      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              {selectedFiles && selectedFiles[0].name ? (
                <div className="selected-file">{selectedFiles && selectedFiles[0].name}</div>
              ) : (
                <FormattedMessage id="uploadDisp" />
              )}
            </div>
            <aside className="selected-file-wrapper">
              <Button variant="contained" endIcon={<CloudUploadOutlined />} disabled={!selectedFiles} onClick={upload}>
                <FormattedMessage id="upload" />
              </Button>
            </aside>
          </section>
        )}
      </Dropzone>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" aliggn>
            <FormattedMessage id="warning" />
          </Typography>
          <Typography id="modal-modal-description" variant="body1" sx={{ mt: 2 }}>
            <FormattedMessage id={messageId} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default UploadFiles;
