import { useEffect, useState, useRef } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { SunDim, MoonStars, ArrowRight } from 'phosphor-react';
import { stack, githubRepos } from './data';
import verifiedIcon from './assets/verified.svg';
import instagram from './assets/instagram.svg';
import email from './assets/email.svg';
import github from './assets/github.svg';

function App() {
  const [headerShouldAppear, setHeaderShouldAppear] = useState(false);
  const [stackGridShouldAppear, setStackGridShouldAppear] = useState<boolean>(false);
  const [skillsProgressbarRefShouldAppear, setskillsProgressbarRefShouldAppear] = useState<boolean>(true);
  const [frontendSkills, setFrontendSkills] = useState(0);
  const [backendSkills, setBackendSkills] = useState(0);

  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(true);
  const [appThemeIsReady, setAppThemeIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  document.documentElement.style.backgroundColor = isDarkMode ? '#121214' : '#ffffff';

  const stackGridRef = useRef<HTMLDivElement | null>(null);
  const skillsProgressbarRef = useRef<HTMLDivElement | null>(null);

  function toggleAppTheme() {
    setIsDarkMode(prev => !prev);
    window.localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  }

  useEffect(() => {
    const checkIfIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(checkIfIsMobile);

    const appThemeFromLocalStorage = window.localStorage.getItem('isDarkMode');

    if (appThemeFromLocalStorage) {
      setIsDarkMode(JSON.parse(appThemeFromLocalStorage));
      setAppThemeIsReady(true);
    }

    const skillProgressbarObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setskillsProgressbarRefShouldAppear(true);
        
        setTimeout(() => {
          setFrontendSkills(82);
          
          setTimeout(() => setBackendSkills(72), 700);
        }, 600);
      }

      else {
        setskillsProgressbarRefShouldAppear(false);
        setFrontendSkills(0);
        setBackendSkills(0);
      }
    }, { threshold: .5 });

    if (skillsProgressbarRef.current) {
      skillProgressbarObserver.observe(skillsProgressbarRef.current);
    }

    const stackGridObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setStackGridShouldAppear(true);
      }

      else {
        setStackGridShouldAppear(false);
      }
    }, { threshold: 0.4 });

    if (stackGridRef.current) {
      stackGridObserver.observe(stackGridRef.current);
    }

    function showElementOnScroll() {
      if (window.scrollY >= 20) {
        setHeaderShouldAppear(true);
      }

      else {
        setHeaderShouldAppear(false);
      }
    }

    window.addEventListener('scroll', showElementOnScroll);

    return () => {
      if (skillsProgressbarRef.current) {
        skillProgressbarObserver.unobserve(skillsProgressbarRef.current);
      }

      if (stackGridRef.current) {
        stackGridObserver.unobserve(stackGridRef.current);
      }
      
      window.removeEventListener('scroll', showElementOnScroll);
    }
  }, []);

  return (
    <main className={clsx('relative pb-16', {
      'bg-light-variant': !isDarkMode,
      'bg-dark-variant': isDarkMode
    })}>
      {!isDarkMode && <div className='w-full h-full bg-frosted-glass-translucent absolute z-10' />}

      <div className='px-4 relative z-20'>
        <header className={clsx('h-16 max-w-lg items-center justify-between rounded-full px-3 fixed top-4 left-1/2 -translate-x-1/2 bg-frosted-glass-blur border backdrop-blur-md border-slate-100 z-50', {
          'flex': headerShouldAppear,
          'hidden': !headerShouldAppear
        })}>
          <div className='h-9 w-9 rounded-full bg-slate-100 grid place-items-center overflow-hidden'>
            <img 
              src='/avatar.jpeg' 
              alt='avatar image' 
            />
          </div>

          <h1 className='flex justify-center items-center gap-2'>
            <span className='font-medium text-md'>@jossanidacruz</span>
            <img 
              src={verifiedIcon} 
              alt='verified icon'
              className='h-5 w-5'
            />
          </h1>

          <button 
            className='h-9 w-9 rounded-full bg-black flex justify-center items-center'
            onClick={toggleAppTheme}
          >
            {isDarkMode ? <SunDim color='#ffffff' size={22} /> : <MoonStars color='#ffffff' size={22} />}
          </button>
        </header>

        <article className='pt-16 flex flex-col gap-4'>
          <div className='h-24 w-24 rounded-full bg-transparent grid place-items-center overflow-hidden mx-auto'>
            <img 
              src='avatar.jpeg' 
              alt='avatar image' 
            />
          </div>

          <div className='flex justify-center items-center gap-2'>
            <span className={clsx('font-bold text-2xl', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode
            })}
            >
              @jossanidacruz
            </span>
            <img 
              src={verifiedIcon} 
              alt='verified icon'
              className='h-5 w-5'
            />
          </div>
        </article>

        <section className='mt-12 flex justify-center items-center flex-col'>
          <div className='w-full flex flex-col justify-center items-center gap-4'>            
            {githubRepos.map(repo => (
              <div 
                key={repo.url}
                className={clsx('w-full max-w-lg h-12 rounded-md px-2 flex items-center justify-between cursor-pointer hover:scale-95 transition-transform', {
                  'bg-white text-black': !isDarkMode,
                  'bg-zinc-900 border border-zinc-800 text-white': isDarkMode
                })}
              >
                <a 
                  href={repo.url}
                  target='_blank'
                  className='w-full bg-transparent flex items-center justify-between'

                >
                  <div className='h-8 w-8 rounded-sm bg-light-variant' />
                  <span className='font-medium text-base'>{repo.name}</span>
                  <ArrowRight size={22} />
                </a>
              </div>
            ))}
          </div>

          <div className='w-full mt-14 flex flex-col justify-center items-center gap-4'>
            <h2 className='flex justify-center items-center gap-2'>
              <span 
                className={clsx('font-medium text-xl', {
                  'text-black': !isDarkMode,
                  'text-white': isDarkMode
                })}
              >
                Tenho experiência com
              </span>
            </h2>

            <div 
              ref={stackGridRef}
              className={clsx('mt-6 grid-rows-4 grid grid-cols-4 gap-4 z-30 transition-all ease-linear delay-150 duration-150', {
                'opacity-100': stackGridShouldAppear,
                'opacity-0': !stackGridShouldAppear
            })}>
              {stack.map(stack => {
                if (isMobile) {
                  return (
                    <Popover.Root key={stack.name}>
                      <Popover.Trigger asChild>
                        <div className='h-9 w-9 hover:scale-110 transition-all cursor-pointer'>
                          <img 
                            src={stack.icon}
                            alt={`${stack.name} logo`}
                            className='w-full h-full'
                          />
                        </div>
                      </Popover.Trigger>
  
                      <Popover.Portal>
                        <Popover.Content 
                          className={clsx('px-7 py-1 rounded-md border z-50', {
                            'bg-zinc-800 border-zinc-900': !isDarkMode,
                            'bg-zinc-900 border-zinc-800': isDarkMode,
                          })}
                          sideOffset={10}
                          side='top'
                          onOpenAutoFocus={event => event.preventDefault()}
                        >
                          <span className='font-medium text-sm text-white'>{stack.name}</span>
                          <Popover.Arrow className='stroke-zinc-700' />
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  );
                }

                return (
                  <Tooltip.Provider 
                    key={stack.name}
                    delayDuration={0}
                  >
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <div className='h-9 w-9 hover:scale-110 transition-all cursor-pointer'>
                          <img 
                            src={stack.icon}
                            alt={`${stack.name} logo`}
                            className='w-full h-full'
                          />
                        </div>
                      </Tooltip.Trigger>

                      <Tooltip.Portal>
                        <Tooltip.Content 
                          className={clsx('px-7 py-1 rounded-md border z-50', {
                            'bg-zinc-800 border-zinc-900': !isDarkMode,
                            'bg-zinc-900 border-zinc-800': isDarkMode,
                          })}
                          sideOffset={10}
                        >
                          <span className='font-medium text-sm text-white'>{stack.name}</span>
                          <Tooltip.Arrow className='stroke-zinc-700' />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                );
              })}
            </div>

            <div 
              className={clsx('w-full mt-14 max-w-lg flex flex-col items-start px-14 transition-all ease-linear delay-150 duration-200 bg-frosted-glass-translucent border backdrop-blur-md border-slate-100 py-7 rounded-md', {
                'opacity-100 translate-y-0': skillsProgressbarRefShouldAppear,
                'opacity-0 translate-y-14': !skillsProgressbarRefShouldAppear
              })}
              ref={skillsProgressbarRef}
            >
              <div 
                className='flex w-full justify-start items-center gap-2'
                role='progressbar'
                aria-label='frontend skills progressbar'
              >
                <span className='font-medium text-xl'>Frontend</span>
                <div className='w-full rounded-full bg-indigo-500/30'>
                  <div 
                    className='transition-all ease-out duration-500 h-2 bg-indigo-500 rounded-full'
                    style={{ width: `${frontendSkills}%` }} 
                  />
                </div>
              </div>

              <div 
                className='flex w-full justify-start items-center gap-2'
                role='progressbar'
                aria-label='backend skills progressbar'
              >
                <span className='font-medium text-xl'>Backend</span>
                <div className='w-full rounded-full bg-indigo-500/30'>
                  <div 
                    className='transition-all ease-out duration-500 h-2 bg-indigo-500 rounded-full'
                    style={{ width: `${backendSkills}%` }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className='w-full max-w-lg mx-auto mt-20 flex flex-col gap-6 justify-center items-center'>
          <ul className='flex gap-4'>
            <li>
              <a 
                href='https://www.instagram.com/jossanidacruz/'
                target='_blank'
              >
                <img 
                  src={instagram} 
                  alt='instagram logo icon'
                  className='w-7 h-7'
                />
              </a>
            </li>

            <li>
              <a href='mailto:jossanidacruz2@gmail.com'>
                <img 
                  src={email} 
                  alt='email icon' 
                  className='w-7 h-7'
                />
              </a>
            </li>

            <li>
              <a 
                href='https://github.com/amateratsoo'
                target='_blank'
              >
                <img 
                  src={github} 
                  alt='github logo icon' 
                  className='w-7 h-7'
                />
              </a>
            </li>
          </ul>

          <span className={clsx('font-medium', {
            'text-black': !isDarkMode,
            'text-white': isDarkMode
          })}
          >
            Feito com 💖
          </span>
        </footer>
      </div>
    </main>
  );
}

export { App };
