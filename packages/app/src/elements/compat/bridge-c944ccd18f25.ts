// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("packages/app/src/elements/group-view.ts",input);
}
