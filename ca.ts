// cats 0.38.0
//
// Generate workflows: ic cats generate
import { features, goModule } from '@infracost/cats';

goModule({
  name: 'analytics-go',
});

features({
  requireUsSpelling: { enabled: true },
});
