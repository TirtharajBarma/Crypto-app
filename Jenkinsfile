pipeline {
    agent any

    stages {
        stage('Pull from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/TirtharajBarma/Crypto-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build --no-cache -t crypto-app-local .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker stop crypto-app || true
                docker rm crypto-app || true
                docker run -d -p 8085:80 --name crypto-app crypto-app-local
                '''
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                    docker login -u $DOCKER_USER -p $DOCKER_PASS
                    docker tag crypto-app-local tirtharajbarma/crypto-app-ci-cd
                    docker push tirtharajbarma/crypto-app-ci-cd
                    '''
                }
            }
        }
    }

    post {
        failure {
            echo '❌ Something went wrong. Check Jenkins logs.'
        }
        success {
            echo '✅ Build and deployment completed successfully.'
        }
    }
}
