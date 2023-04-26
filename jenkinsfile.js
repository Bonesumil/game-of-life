node('MAVEN_JDK8') {
    stage('version control') {
        git url: 'https://github.com/Bonesumil/game-of-life.git'
            branch: 'scripte'
   }
}