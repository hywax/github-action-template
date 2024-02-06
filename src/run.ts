import { debug, getInput, setFailed, setOutput } from '@actions/core'
import { context } from '@actions/github'

export async function run(): Promise<void> {
  try {
    const message: string = getInput('message')

    debug(`Event: ${context.eventName}, Repo: ${context.repo.repo}, SHA: ${context.sha}`)
    debug(`${message}`)

    setOutput('resultMessage', `The message was: ${message}`)
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message)
    }
  }
}
