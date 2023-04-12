pipeline {
   agent {label 'jenkins-slave'}

   environment {
      DOCKERHUB_CREDENTIALS = credentials('dockerhub_credentials')
   }

   stages {
      
      stage('Build Image'){
         steps {
            sh 'docker build -t amrelzahar/dummy-app .'
         }
      }

      stage('Login') {
         steps {
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
         }
      }

      stage('Push Image'){
         steps {
            sh 'docker push amrelzahar/dummy-app'
            sh 'echo "FINISHED"'
         }
      }
   }
}