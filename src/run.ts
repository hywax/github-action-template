import * as core from '@actions/core'
import * as github from '@actions/github'

export async function run(): Promise<void> {
  try {
    const { context } = github
    const message: string = core.getInput('message')

    core.debug(`Event: ${context.eventName}, Repo: ${context.repo.repo}, SHA: ${context.sha}`)
    core.debug(`${message}`)

    core.setOutput('time', 10)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}
