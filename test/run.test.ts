import * as core from '@actions/core'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { MockInstance } from 'vitest'
import * as mod from '../src/run'

vi.mock('@actions/github', async (importOriginal) => {
  return {
    ...await importOriginal(),
    context: {
      eventName: 'test',
      sha: 'd88c822',
      repo: {
        repo: 'hywax/github-action-template',
      },
    },
  }
})

describe('index', () => {
  const runMock = vi.spyOn(mod, 'run')

  let debugMock: MockInstance
  let errorMock: MockInstance
  let getInputMock: MockInstance
  let setFailedMock: MockInstance
  let setOutputMock: MockInstance

  beforeEach(() => {
    debugMock = vi.spyOn(core, 'debug').mockImplementation()
    errorMock = vi.spyOn(core, 'error').mockImplementation()
    getInputMock = vi.spyOn(core, 'getInput').mockImplementation()
    setOutputMock = vi.spyOn(core, 'setOutput').mockImplementation()
    setFailedMock = vi.spyOn(core, 'setFailed').mockImplementation()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('success run status', async () => {
    getInputMock.mockImplementation((name: string): string => {
      switch (name) {
        case 'message':
          return 'Hello, Test!'
        default:
          return ''
      }
    })

    await mod.run()

    expect(runMock).toHaveReturned()

    expect(debugMock).toHaveBeenNthCalledWith(1, 'Event: test, Repo: hywax/github-action-template, SHA: d88c822')
    expect(debugMock).toHaveBeenNthCalledWith(2, 'Hello, Test!')

    expect(setOutputMock).toHaveBeenNthCalledWith(1, 'resultMessage', 'The message was: Hello, Test!')
    expect(errorMock).not.toHaveBeenCalled()
  })

  it('failed run status', async () => {
    getInputMock.mockImplementation((_name: string) => {
      throw new Error('Input message not found')
    })

    await mod.run()

    expect(setFailedMock).toHaveBeenNthCalledWith(1, 'Input message not found')
    expect(errorMock).not.toHaveBeenCalled()
  })
})
