import type { CodyCommand, CodyIDE } from '@sourcegraph/cody-shared'
import { CustomCommandsList } from '../chat/components/CustomCommandsList'
import { DefaultCommandsList } from '../chat/components/DefaultCommandsList'

interface CommandsTabProps {
    commands: CodyCommand[]
    IDE?: CodyIDE
}

export const CommandsTab: React.FC<CommandsTabProps> = ({ commands, IDE }) => (
    <div className="tw-flex tw-flex-col tw-gap-8 tw-px-8 tw-py-6">
        <DefaultCommandsList IDE={IDE} />
        {commands.length && <CustomCommandsList commands={commands} IDE={IDE} />}
    </div>
)