{-# LANGUAGE OverloadedStrings #-}

module Server
  ( server
  ) where

{- import           LIO.DCLabel -}
import           LIO.HTTP.Server.Frankie         hiding (server)
import           LIO.HTTP.Server.Frankie.Loggers
import           LIO.HTTP.Server.Frankie.Static
import           Prelude                         hiding (log)

server = do
  mode "dev" $ do
    host "127.0.0.1"
    port 3000
    appState ()
    static fileHandler "/assets" "public"
    views htmlHandler "/views"
    logger DEBUG colorStdOutLogger
  dispatch $ do
    get "/" helloWorld
    fallback $ respond notFound
  onError $ \err -> do
    log ERROR $ "Controller failed with " ++ displayException err
    respond notFound

helloWorld :: DCController s
helloWorld = respond $ render "index.html"
