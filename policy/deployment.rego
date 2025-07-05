package main

deny[msg] {
  input.kind == "Deployment"
  not input.spec.replicas
  msg = "Deployment should specify replicas"
}

deny[msg] {
  input.kind == "Deployment"
  input.spec.replicas < 2
  msg = "Deployment should have at least 2 replicas"
}
