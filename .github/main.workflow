workflow "New workflow" {
  resolves = ["Discord Notify"]
  on = "push"
}

action "Discord Notify" {
  uses = "appleboy/discord-action@0.0.2"
}
