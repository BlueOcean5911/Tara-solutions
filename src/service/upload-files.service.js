import http from '../http-common';

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append('file', file);

    return http.post('/analysis/comprehension-performance', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    });
  }

  predict(data) {
    const requestData = {
      days_studied: data.dayStuded,
      activities_engaged: data.activityEngaged,
      total_clicks: data.totalClicks,
      assessments_completed: data.assessmentCompleted / 100,
      average_assessment_score: data.assessmentAverageScore
    };
    return http.post('/analysis/studuent-performance', requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getFiles() {
    return http.get('/files');
  }
}

export default new UploadFilesService();
