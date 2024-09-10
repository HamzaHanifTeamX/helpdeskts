import { FoldingCube } from 'loaders-ui';
import 'loaders-ui/dist/main/index.min.css';

export default function Loading() {
    return (
        <div className='flex h-screen items-center justify-center'>
            <FoldingCube color="purple" />  
        </div>
    );
    
}