pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:$PATH"  // Ensure Docker binary path is added globally
    }

    stages {
        stage('Pull from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/TirtharajBarma/Crypto-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Check if Docker is available
                    sh 'docker --version'
                    // Build the Docker image
                    sh 'docker build --no-cache -t crypto-app-local .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove the previous container if exists
                    sh 'docker stop crypto-app || true'
                    sh 'docker rm crypto-app || true'
                    // Run the Docker container
                    sh 'docker run -d -p 8085:80 --name crypto-app crypto-app-local'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        // Log in to Docker Hub
                        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                        // Tag the image
                        sh 'docker tag crypto-app-local tirtharajbarma/crypto-app-ci-cd'
                        // Push the image to Docker Hub
                        sh 'docker push tirtharajbarma/crypto-app-ci-cd'
                    }
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