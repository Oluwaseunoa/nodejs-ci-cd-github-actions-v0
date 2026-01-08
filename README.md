# Node.js CI/CD Pipeline with GitHub Actions
👤 Author: Oluwaseun Osunsola
[🔗 LinkedIn: View Profile](https://www.linkedin.com/in/oluwaseun-osunsola-95539b175/)
[📁 Project Repository: View Project](https://github.com/Oluwaseunoa/nodejs-ci-cd-github-actions-v0)


## 📋 Project Overview
This project implements a complete Continuous Integration (CI) pipeline for a Node.js application using GitHub Actions. It demonstrates industry-standard practices for automated testing, build validation, and deployment workflows.

## 🎯 Learning Objectives
- Master GitHub Actions workflow syntax and structure
- Implement automated CI/CD pipelines for Node.js applications
- Configure parallel testing with build matrices
- Set up proper development workflows with branching strategies
- Utilize environment variables and conditional execution
- Validate pull requests with automated checks

## 🛠️ Prerequisites

### System Requirements
- **GitHub Account** - For repository hosting and Actions
- **Git** - Version control system
- **Node.js & npm** - JavaScript runtime and package manager
- **VS Code** - Recommended text editor
- **Basic Terminal Skills** - Command line proficiency

### Verification
![Confirm Node.js and npm Installation](img/1.confirm_node_and_npm_installed.png)
*Verify your development environment has the required tools installed*

---

## 🚀 Step-by-Step Implementation

### **Step 1: Repository Setup**

#### 1.1 Create GitHub Repository
![Create GitHub Repository](img/2.create_github_repo_with_a_README.png)
*Initialize a new repository with README enabled*

**Action:** Create repository named `nodejs-ci-cd-github-actions` on GitHub with README file.

#### 1.2 Clone Repository Locally
![Copy Clone URL](img/3.copy_the_clone_https_url_from_code.png)
*Obtain the repository HTTPS URL from GitHub*

```bash
git clone https://github.com/your-username/nodejs-ci-cd-github-actions.git
```

![Clone Repository](img/4.clone_the_git_repo_on_terminal.png)
*Execute git clone command in terminal*

#### 1.3 Navigate to Project Directory
![Navigate to Cloned Repository](img/5.navigate_into_cloned_repo.png)
*Change directory into the cloned project*

```bash
cd nodejs-ci-cd-github-actions
```

---

### **Step 2: Node.js Application Setup**

#### 2.1 Initialize Project
![Initialize npm](img/6.initialize_npm-y.png)
*Create package.json with default settings*

```bash
npm init -y
```

#### 2.2 Install Dependencies
![Install Express](img/7.npm_install_express.png)
*Add Express.js framework to project*

```bash
npm install express
```

#### 2.3 Create Application File
![Create Index.js](img/8.touch_index-js.png)
*Initialize the main application file*

```bash
touch index.js
```

![Open in VS Code](img/9.code_folder_to_open_in_vcode.png)
*Open project folder in VS Code for editing*

#### 2.4 Implement Application Code
![Add Application Code](img/10.add_code_to_index-js.png)
*Implement basic Express.js server*

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GitHub Actions CI/CD Project Running');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

#### 2.5 Configure Package Scripts
![Modify Package.json Scripts](img/11.modify_scripts_section_of_package-json_to_start_build_and_test.png)
*Add build, test, and start scripts to package.json*

```json
"scripts": {
  "start": "node index.js",
  "build": "echo Build successful",
  "test": "echo Tests passed"
}
```

---

### **Step 3: Local Development & Testing**

#### 3.1 Start Application Locally
![Start Application](img/12.start_application_with_npm_start.png)
*Launch the Node.js server*

```bash
npm start
```

#### 3.2 Verify Application
![Visit Local Application](img/13.visit_application_at_localhost_3000_on_browser_successfuly.png)
*Confirm application runs on http://localhost:3000*

#### 3.3 Stop Application
![Stop Application Process](img/14.ctrl_c_to_stop_the_process.png)
*Terminate the running server*

---

### **Step 4: Version Control Configuration**

#### 4.1 Configure Git Ignore
![Create .gitignore](img/15.touch_gitignore.png)
*Initialize git ignore file*

```bash
touch .gitignore
```

![Add Node Modules to .gitignore](img/16.add_node_modules_to_gitignore.png)
*Exclude node_modules from version control*

```
node_modules
```

#### 4.2 Commit and Push Changes
![Commit and Push to GitHub](img/17.add_commit_and_push_to_github.png)
*Stage, commit, and push all changes to remote repository*

```bash
git add .
git commit -m "Initial Node.js application setup"
git push origin main
```

![Confirm on GitHub](img/18.confirm_on_github.png)
*Verify all files are properly pushed to GitHub repository*

---

### **Step 5: GitHub Actions Workflow Implementation**

#### 5.1 Create Workflow Directory Structure
![Create GitHub Workflow Folders](img/19.create_github_worklow_folders.png)
*Set up directory structure for GitHub Actions*

```bash
mkdir -p .github/workflows
```

#### 5.2 Create Workflow File
![Create main.yml](img/20.create_main-yml_in_github_workflow.png)
*Initialize the main workflow configuration file*

```bash
touch .github/workflows/main.yml
```

#### 5.3 Define Workflow Structure
![Add Script to main.yml](img/21.add_script_to_main_yml.png)
*Begin implementing the CI workflow configuration*

```yaml
name: Node.js CI Workflow
```

#### 5.4 Configure Workflow Triggers
![Workflow Trigger Configuration](img/22.this_section_triggers_workflow_on_push_and_pull_request_to_main.png)
*Define events that initiate the CI pipeline*

```yaml
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
```

#### 5.5 Set Environment Variables
![Environment Variable Configuration](img/23.this_section_set_NODE_ENV_to_production.png)
*Configure pipeline environment settings*

```yaml
env:
  NODE_ENV: production
```

#### 5.6 Define Job Configuration
![Job Definition and Runtime](img/24.this_part_of_job_definition_name_and_specify_runtime.png)
*Specify job name and execution environment*

```yaml
jobs:
  build:
    name: Build and Test Node.js Application
    runs-on: ubuntu-latest
```

#### 5.7 Implement Build Matrix
![Parallel Execution Matrix](img/25.this_part_of_job_definition_handles_parallel_execution_matrix_strategy_node-version_18x_20x.png)
*Configure parallel testing across multiple Node.js versions*

```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]
```

#### 5.8 Add Conditional Execution
![Conditional Execution Logic](img/26.this_part_of_job_definition_handles_conditional_execution_push_or_pull_request.png)
*Implement conditional workflow execution rules*

```yaml
if: github.event_name == 'push' || github.event_name == 'pull_request'
```

#### 5.9 Define Pipeline Steps (Part 1)
![Steps 1-3: Setup Phase](img/27.step_1-3_checkout_repo_set_nodejs_version_from_matrix_display_environment_variabe.png)
*Repository checkout, Node.js setup, and environment verification*

```yaml
steps:
      # Step 1: Checkout repository code
      - name: Checkout repository
        uses: actions/checkout@v2

      # Step 2: Set up Node.js version from matrix
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      # Step 3: Display environment variable
      - name: Display environment
        run: echo "Environment is $NODE_ENV"

```

#### 5.10 Define Pipeline Steps (Part 2)
![Steps 4-7: Build and Test Phase](img/28.step_4-7_install_dependency_build_application_and_run_test.png)
*Dependency installation, build process, and test execution*

```yaml
   # Step 4: Install dependencies
      - name: Install dependencies
        run: npm install

      # Step 5: Build application
      - name: Build application
        run: npm run build

      # Step 6: Run tests
      - name: Run tests
        run: npm test

```

#### 5.11 Deploy Workflow Configuration
![Commit and Push Workflow](img/29.add_commit_and_push_to_github.png)
*Push the complete CI workflow to GitHub*

```bash
git add .github/workflows/main.yml
git commit -m "Add GitHub Actions CI workflow"
git push origin main
```

---

### **Step 6: Pipeline Execution & Verification**

#### 6.1 Monitor Workflow Execution
![Navigate to Actions Tab](img/30.go_to_repo_action_tab_on_github_to_verify_workflow_run_click_on_it.png)
*Access GitHub Actions dashboard to monitor pipeline execution*

#### 6.2 Verify Workflow Completion
![Workflow Execution Summary](img/31.page_display_main-yml_2_jobs_completed.png)
*Confirm successful completion of all workflow jobs*

#### 6.3 Inspect Parallel Execution
![Matrix Job Details](img/32.click_to_see_both_instance_of_matrix_job_works_together_and_successfully_ran_completely.png)
*Review parallel execution results across different Node.js versions*

---

### **Step 7: Branching Strategy & Pull Request Workflow**

#### 7.1 Create Feature Branch
![Create Feature Branch](img/33.check_out_-b_to_a_new_branch_feature-test.png)
*Isolate new features in a dedicated branch*

```bash
git checkout -b feature-test
```

#### 7.2 Implement Feature Changes
![Modify Application](img/34.modify_app.png)
*Make changes to the application code in the feature branch*

#### 7.3 Push Feature Branch
![Push Feature Branch](img/35.add_commit_and_push_to_feature-test_branch_on_github.png)
*Upload feature branch to remote repository*

```bash
git add .
git commit -m "Add new feature"
git push origin feature-test
```

#### 7.4 Switch to Feature Branch on GitHub
![Switch to Feature Branch](img/36.go_to_github_repo_and_switch_to_feature-test_branch.png)
*Navigate to the feature branch in GitHub web interface*

#### 7.5 Initiate Pull Request
![Compare Changes](img/37.click_contribute_and_then_compare.png)
*Begin the pull request creation process*

![Create Pull Request](img/38.compare_changes_and_click_create_pull_request.png)
*Compare changes between branches and initiate PR*

#### 7.6 Configure Pull Request Details
![Add PR Details](img/39.add_title_and_description_then_click_create_pull_request.png)
*Provide descriptive title and context for the pull request*

#### 7.7 Monitor PR-triggered Workflow
![PR-triggered Workflow](img/40.workflow_triggered_by_created_pull_request.png)
*Verify CI pipeline automatically runs for pull request validation*

#### 7.8 Review Test Results
![All Tests Passed](img/41.all_test_passed_successfully_click_merge_pull_request.png)
*Confirm all automated checks pass before merging*

#### 7.9 Execute Merge
![Confirm Merge](img/42.confirm_merge.png)
*Proceed with merging feature branch into main*

![Merge Successful](img/43.merge_successful.png)
*Verify successful completion of merge operation*

---

### **Step 8: Post-Merge Verification**

#### 8.1 Synchronize Local Repository
![Pull Latest Changes](img/44.git_pull_changes_locally_and_run_app.png)
*Update local repository with merged changes*

```bash
git checkout main
git pull origin main
npm start
```

#### 8.2 Verify Updated Application
![Run Updated Application](img/45.app_runs_in_localhost_3000_with_latest_or_modified_version.png)
*Confirm application runs successfully with latest changes*

---

## 📊 Key Features Demonstrated

### ✅ Core CI/CD Principles
- **Automated Testing**: Tests run on every push and pull request
- **Build Validation**: Verification of application build process
- **Parallel Execution**: Simultaneous testing across multiple environments
- **Quality Gates**: Automated checks before merge approvals

### ✅ Technical Implementation
- **YAML Configuration**: Proper syntax and structure
- **Environment Management**: Variable configuration and usage
- **Matrix Strategy**: Cross-version compatibility testing
- **Conditional Logic**: Smart pipeline execution rules

### ✅ Development Workflow
- **Branch Protection**: PR requirements before merging
- **Automated Validation**: Continuous integration checks
- **Deployment Readiness**: Production environment preparation
- **Team Collaboration**: Structured code review process

---

## 🏆 Learning Outcomes

### Technical Skills Developed
1. **GitHub Actions Mastery**: Complete workflow design and implementation
2. **CI/CD Pipeline Design**: End-to-end automation strategy
3. **Quality Assurance**: Automated testing integration
4. **DevOps Practices**: Infrastructure as code principles

### Professional Competencies
- Industry-standard development workflows
- Collaborative coding practices
- Automated quality control processes
- Production-ready deployment pipelines

---

## 🔧 Complete Workflow Configuration

```yaml
name: Node.js CI Workflow

# ----------------------------------------------------
# Workflow Triggers
# ----------------------------------------------------
# Runs on push and pull request to the main branch
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# ----------------------------------------------------
# Environment Variables (Workflow Level)
# ----------------------------------------------------
env:
  NODE_ENV: production

# ----------------------------------------------------
# Jobs Definition
# ----------------------------------------------------
jobs:
  build:
    name: Build and Test Node.js Application
    runs-on: ubuntu-latest

    # ------------------------------------------------
    # Build Matrix (Parallel Execution)
    # ------------------------------------------------
    strategy:
      matrix:
        node-version: [18.x, 20.x]

    # ------------------------------------------------
    # Conditional Execution
    # ------------------------------------------------
    if: github.event_name == 'push' || github.event_name == 'pull_request'

    # ------------------------------------------------
    # Steps
    # ------------------------------------------------
    steps:
      # Step 1: Checkout repository code
      - name: Checkout repository
        uses: actions/checkout@v2

      # Step 2: Set up Node.js version from matrix
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      # Step 3: Display environment variable
      - name: Display environment
        run: echo "Environment is $NODE_ENV"

      # Step 4: Install dependencies
      - name: Install dependencies
        run: npm install

      # Step 5: Build application
      - name: Build application
        run: npm run build

      # Step 6: Run tests
      - name: Run tests
        run: npm test

```

---

## 📈 Portfolio Readiness

This project demonstrates comprehensive CI/CD implementation skills suitable for:
- **Developer Portfolios**: Showcases modern DevOps practices
- **Technical Interviews**: Demonstrates pipeline automation expertise
- **Project Documentation**: Provides clear, step-by-step implementation guide
- **Team Knowledge Sharing**: Serves as educational resource for development teams

---

## 🎯 Project Validation Checklist

- [x] Proper YAML syntax and indentation
- [x] Correct workflow file location (.github/workflows/)
- [x] Automated build and test execution
- [x] Matrix build implementation
- [x] CI triggering on push and pull request events
- [x] Node.js project integration
- [x] Environment variable configuration
- [x] Conditional execution logic
- [x] Complete documentation with screenshots
- [x] Portfolio-ready presentation

---

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)
- [Express.js Framework](https://expressjs.com/)
- [Continuous Integration Patterns](https://martinfowler.com/articles/continuousIntegration.html)

---

**Project Status**: ✅ Complete    
**GitHub Repository**: [nodejs-ci-cd-github-actions](https://github.com/Oluwaseunoa/nodejs-ci-cd-github-actions-v0)  
**Author**: Oluwaseun Osunsola
**License**: MIT

---

*This project serves as a comprehensive demonstration of modern CI/CD practices using GitHub Actions, suitable for both learning and professional portfolio presentation.*