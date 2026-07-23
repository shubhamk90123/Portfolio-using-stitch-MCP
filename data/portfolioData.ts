import { Project, TechItem, ExperienceItem } from '../types';

export const HERO_DATA = {
  status: 'System Status: Optimal',
  version: 'v2.4.0-STABLE',
  headline: 'ARCHITECTING DIGITAL RESILIENCE.',
  subheadline:
    'I build hyper-scalable full-stack environments where technical precision meets high-end editorial aesthetics. Currently refining the boundaries of the modern web.',
  portraitImage:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  coreTech: ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'Go', 'Rust', 'WebGL'],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'neural-net-dashboard',
    title: 'Neural-Net Dashboard',
    subtitle: 'Real-time ML Cluster Monitoring & WebGL Visualizer',
    category: 'Full-Stack',
    featured: true,
    stars: 1240,
    complexity: 'Extreme',
    description:
      'A real-time data visualization platform for monitoring machine learning training clusters. Built with WebGL for high-performance rendering of million-node graphs.',
    longDescription:
      'Engineered to solve telemetry bottlenecks in high-scale AI infrastructure. The platform ingests over 250k data points per second across distributed GPU clusters, rendering live node topology without main-thread UI lag.',
    architectureDetails: [
      'Zero-copy WebSocket binary data frame parser in Rust/Wasm',
      'Custom instanced shader rendering in Three.js for 1M+ nodes at 60 FPS',
      'Time-series aggregation engine built on PostgreSQL & TimescaleDB',
      'Distributed telemetry collector sidecars deployed with K8s operators',
    ],
    tags: ['NEXT.JS', 'THREE.JS', 'RUST', 'WEBSOCKETS', 'KUBERNETES'],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Throughput', value: '250k ops/sec' },
      { label: 'Rendering', value: '60 FPS @ 1M nodes' },
      { label: 'Latency', value: '< 12ms E2E' },
    ],
    codeSnippet: {
      language: 'typescript',
      filename: 'ClusterVisualizer.ts',
      code: `export class ClusterTopologyEngine {
  private renderer: THREE.WebGLRenderer;
  private particleBuffer: THREE.InstancedBufferAttribute;

  public async streamMetrics(socket: WebSocketStream): Promise<void> {
    for await (const chunk of socket.readable) {
      const decoded = await WasmDecoder.decodeFrame(chunk);
      this.updateNodePositions(decoded.buffer);
      this.requestFrameRender();
    }
  }
}`,
    },
    demoUrl: 'https://demo.neuralnet.dev',
    githubUrl: 'https://github.com/digital-architect/neural-net-dashboard',
  },
  {
    id: 'hyperion-api-gateway',
    title: 'Hyperion API Gateway',
    subtitle: 'High-Performance gRPC & GraphQL Microservice Mesh',
    category: 'Backend',
    featured: true,
    stars: 890,
    complexity: 'High',
    description:
      'Ultra-low latency middleware layer supporting gRPC and GraphQL federation for distributed microservices.',
    longDescription:
      'Hyperion serves as the central traffic control system for enterprise workloads. Features intelligent adaptive rate limiting, circuit breaking, dynamic schema stitching, and distributed tracing.',
    architectureDetails: [
      'Zero-allocation HTTP/2 and gRPC proxy pipeline written in Go',
      'Redis cluster backed sliding-window rate limiter with token bucket fallback',
      'Dynamic OpenTelemetry tracing headers injection across service boundaries',
      'Hot-reloading Lua scripts for custom authentication rules',
    ],
    tags: ['GO', 'REDIS', 'KUBERNETES', 'GRPC', 'GRAPHQL'],
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'P99 Latency', value: '1.4ms' },
      { label: 'Uptime', value: '99.999%' },
      { label: 'Request Vol', value: '2.5B / day' },
    ],
    codeSnippet: {
      language: 'go',
      filename: 'gateway.go',
      code: `package main

type GatewayConfig struct {
	MaxConnsPerHost int
	ReadTimeout     time.Duration
}

func (g *ProxyGateway) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	ctx, span := tracer.Start(r.Context(), "HyperionProxy")
	defer span.End()

	if err := g.Limiter.Allow(ctx, r.RemoteAddr); err != nil {
		http.Error(w, "Rate Limit Exceeded", http.StatusTooManyRequests)
		return
	}
	g.Upstream.ServeHTTP(w, r.WithContext(ctx))
}`,
    },
    demoUrl: 'https://hyperion.dev',
    githubUrl: 'https://github.com/digital-architect/hyperion-gateway',
  },
  {
    id: 'aether-distributed-db',
    title: 'Aether Distributed Storage',
    subtitle: 'Raft-Consensus Multi-Region Key-Value Engine',
    category: 'Systems',
    featured: true,
    stars: 1650,
    complexity: 'Extreme',
    description:
      'Fault-tolerant, LSM-tree backed distributed database engine written in Rust featuring Raft consensus and zero-copy disk I/O.',
    longDescription:
      'Designed for global state synchronization with minimal replication lag. Incorporates asynchronous io_uring syscalls, memory-mapped SSTables, and automated shard rebalancing across cloud zones.',
    architectureDetails: [
      'Custom LSM-Tree engine with Bloom filter SSTable read acceleration',
      'Tokio async runtime optimized for multi-core NUMA architectures',
      'Strict linearizable consistency guarantee powered by Raft protocol',
      'Zero-copy serialization with Cap\'n Proto for IPC messaging',
    ],
    tags: ['RUST', 'RAFT', 'IO_URING', 'DISTRIBUTED-SYSTEMS'],
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'IOPS', value: '450k / sec' },
      { label: 'Consistency', value: 'Linearizable' },
      { label: 'Replication', value: '< 5ms cross-region' },
    ],
    codeSnippet: {
      language: 'rust',
      filename: 'raft_node.rs',
      code: `pub struct RaftNode<S: Storage> {
    id: NodeId,
    peers: HashMap<NodeId, PeerClient>,
    log: LogStore<S>,
    state: NodeState,
}

impl<S: Storage> RaftNode<S> {
    pub async fn append_entries(&mut self, req: AppendRequest) -> Result<AppendResponse> {
        if req.term < self.current_term {
            return Ok(AppendResponse::reject(self.current_term));
        }
        self.log.commit(req.entries).await?;
        Ok(AppendResponse::success(self.current_term))
    }
}`,
    },
    githubUrl: 'https://github.com/digital-architect/aether-db',
  },
  {
    id: 'vortex-design-system',
    title: 'Vortex UI Engine',
    subtitle: 'Accessible Dark-Mode Component System & Token Studio',
    category: 'Frontend',
    featured: false,
    stars: 620,
    complexity: 'Medium',
    description:
      'Modular, accessible component design system built with Next.js, Tailwind CSS v4, and Radix primitives.',
    longDescription:
      'Provides developers with dark-mode first UI elements, glassmorphism abstractions, keyboard navigation, and design token sync across web and mobile viewports.',
    architectureDetails: [
      'Tailwind CSS v4 token registry with CSS variable injection',
      'WCAG 2.1 AAA contrast compliance validator',
      'Fluid typography scale engine for dynamic viewport resizing',
    ],
    tags: ['NEXT.JS', 'TAILWIND-CSS', 'TYPESCRIPT', 'ACCESSIBILITY'],
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Components', value: '45+' },
      { label: 'Bundle Size', value: '< 14kb Gzip' },
    ],
    demoUrl: 'https://vortex.ui.dev',
    githubUrl: 'https://github.com/digital-architect/vortex-ui',
  },
];

export const TECH_STACK: TechItem[] = [
  {
    name: 'React & Next.js 15',
    category: 'Frontend',
    icon: 'code',
    level: 'Expert / Principal',
    description: 'App Router, Server Components, Streaming SSR, Parallel Routes, & RSC optimization.',
    highlight: true,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'integration_instructions',
    level: 'Expert',
    description: 'Strict type safety, generic metaprogramming, and AST transformations.',
    highlight: true,
  },
  {
    name: 'Tailwind CSS & Glassmorphism',
    category: 'Frontend',
    icon: 'palette',
    level: 'Expert',
    description: 'Design system engineering, custom utility tokens, micro-animations & responsive math.',
    highlight: true,
  },
  {
    name: 'Node.js & Express / NestJS',
    category: 'Backend',
    icon: 'dns',
    level: 'Expert',
    description: 'Event-loop optimization, asynchronous streams, clustering & memory leak debugging.',
    highlight: true,
  },
  {
    name: 'Go (Golang)',
    category: 'Backend',
    icon: 'terminal',
    level: 'Advanced',
    description: 'High-throughput microservices, channels, goroutine pools, & gRPC services.',
    highlight: true,
  },
  {
    name: 'Rust Systems Programming',
    category: 'Systems',
    icon: 'memory',
    level: 'Advanced',
    description: 'Memory safety without GC, Tokio async runtime, WebAssembly bindings & binary parsers.',
    highlight: true,
  },
  {
    name: 'PostgreSQL & TimescaleDB',
    category: 'Databases',
    icon: 'database',
    level: 'Expert',
    description: 'Complex query optimization, indexing strategies, partition management & ACID compliance.',
    highlight: false,
  },
  {
    name: 'Redis & In-Memory Caching',
    category: 'Databases',
    icon: 'bolt',
    level: 'Expert',
    description: 'Distributed locks, pub-sub messaging, LRU caching & sliding-window rate limiters.',
    highlight: false,
  },
  {
    name: 'Kubernetes & Docker',
    category: 'Cloud & DevOps',
    icon: 'cloud_queue',
    level: 'Advanced',
    description: 'Container orchestration, Helm charts, ingress controllers & GitOps pipelines.',
    highlight: false,
  },
  {
    name: 'GraphQL & gRPC Federation',
    category: 'Backend',
    icon: 'schema',
    level: 'Expert',
    description: 'Schema stitching, Apollo federation, protocol buffers & RPC streaming.',
    highlight: false,
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Principal System Architect',
    company: 'Apex Infrastructure Labs',
    period: '2023 - PRESENT',
    type: 'Full-Time',
    description:
      'Spearheading core platform architecture for high-volume enterprise financial & telemetry systems.',
    highlights: [
      'Redesigned API gateway infrastructure reducing P99 latencies by 42% across 2.5B daily requests',
      'Architected distributed telemetry dashboard supporting 1,000,000 live nodes via WebGL',
      'Mentored 18 senior engineers in distributed systems design, Rust tooling, and RSC paradigms',
    ],
    skills: ['Go', 'Rust', 'Next.js', 'Kubernetes', 'TimescaleDB', 'gRPC'],
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Infrastructure Engineer',
    company: 'Vanguard Digital Systems',
    period: '2021 - 2023',
    type: 'Full-Time',
    description:
      'Designed resilient web applications, custom design systems, and real-time data streaming pipelines.',
    highlights: [
      'Built custom dark-mode design system utilized by 45+ product teams across web & mobile',
      'Implemented zero-downtime database migration strategy for 80TB PostgreSQL cluster',
      'Pioneered micro-frontend integration reducing main bundle load times by 65%',
    ],
    skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
  },
  {
    id: 'exp-3',
    role: 'Lead Frontend Systems Engineer',
    company: 'Kinetic Web Studio',
    period: '2019 - 2021',
    type: 'Full-Time',
    description:
      'Led frontend development team in crafting high-impact editorial & interactive web platforms.',
    highlights: [
      'Delivered 30+ bespoke client web platforms with 99.9% uptime SLA and sub-second load times',
      'Architected interactive CLI web terminal user experience winning web design accolades',
    ],
    skills: ['React', 'JavaScript', 'CSS3/HTML5', 'WebGL', 'REST APIs'],
  },
];

export const MANIFESTO_METRICS = [
  { label: 'Deployments', value: '50+' },
  { label: 'Uptime Metric', value: '99.9%' },
  { label: 'Global Requests', value: '2.5B+' },
  { label: 'Average Latency', value: '1.4ms' },
];
