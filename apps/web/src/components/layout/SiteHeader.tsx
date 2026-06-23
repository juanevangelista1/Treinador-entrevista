import Link from 'next/link';
import { Brain } from 'lucide-react';

export function SiteHeader() {
	return (
		<header className='sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm'>
			<div className='mx-auto flex max-w-2xl items-center gap-2 px-4 py-3 md:px-8'>
				<Link
					href='/'
					className='flex items-center gap-2 text-foreground transition-all duration-300 ease-out hover:scale-[1.03] hover:opacity-80'>
					<Brain className='h-5 w-5 text-primary' />
					<span className='text-xl font-bold'>Interview Trainer</span>
				</Link>
			</div>
		</header>
	);
}
